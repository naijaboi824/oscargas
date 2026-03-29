import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      address,
      city,
      zipCode,
      cartItems,
      subtotal,
      deliveryFee,
      grandTotal,
    } = data;

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !zipCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format order message for WhatsApp
    const orderMessage = `
*OSCAR GAS ORDER*

*Customer Details:*
Name: ${name}
Email: ${email}
Phone: ${phone}

*Delivery Address:*
${address}
${city}, ${zipCode}

*Order Items:*
${cartItems.map((item: any) => `• ${item.size} (${item.label}) x${item.qty} = R ${item.subtotal.toLocaleString("en-ZA")}`).join("\n")}

*Order Summary:*
Subtotal: R ${subtotal.toLocaleString("en-ZA")}
Delivery Fee: R ${deliveryFee.toFixed(2)}
*Total: R ${grandTotal.toFixed(2)}*

Order placed on: ${new Date().toLocaleString()}
    `.trim();

    // You can log the order here, save to database, or send emails
    console.log("New Order Received:", {
      name,
      email,
      phone,
      address,
      city,
      zipCode,
      cartItems,
      subtotal,
      deliveryFee,
      grandTotal,
      timestamp: new Date().toISOString(),
    });

    // Optional: Send email notification
    // await sendEmailNotification(email, name, orderMessage);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Order received! You will be contacted shortly via WhatsApp.",
        orderId: `ORD-${Date.now()}`,
        whatsappUrl: `https://wa.me/27813870497?text=${encodeURIComponent(orderMessage)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}
