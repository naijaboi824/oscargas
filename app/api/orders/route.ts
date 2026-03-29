import { NextRequest, NextResponse } from "next/server";

// WhatsApp Business Phone Number ID and Access Token
// You'll need to set these as environment variables
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID || "27787437120";
const WHATSAPP_BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

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

    // Format order summary for WhatsApp
    const orderSummary = `📦 *NEW ORDER - OSCAR GAS*

👤 *Customer*
${name}
📞 ${phone}
✉️ ${email}

📍 *Delivery Address*
${address}
${city} ${zipCode}

📋 *Order Items*
${cartItems.map((item: any) => `${item.size.padEnd(5)} x${item.qty.toString().padEnd(2)} = R ${item.subtotal.toLocaleString("en-ZA").padEnd(8)}`).join("\n")}

💰 *Summary*
Subtotal: R ${subtotal.toLocaleString("en-ZA")}
Delivery: R ${deliveryFee.toFixed(2)}
━━━━━━━━━━━━━━━
*TOTAL: R ${grandTotal.toFixed(2)}*

🕐 ${new Date().toLocaleString()}`;

    // Log order to console/backend
    console.log("📦 New Order Received:", {
      orderId: `ORD-${Date.now()}`,
      name,
      email,
      phone,
      address,
      city,
      zipCode,
      itemCount: cartItems.length,
      grandTotal,
      timestamp: new Date().toISOString(),
    });

    // Send to WhatsApp (if credentials are available)
    if (WHATSAPP_ACCESS_TOKEN && WHATSAPP_BUSINESS_ACCOUNT_ID) {
      try {
        const whatsappResponse = await fetch(
          `https://graph.instagram.com/v18.0/${WHATSAPP_PHONE_ID}/messages`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: "27787437120",
              type: "text",
              text: { body: orderSummary },
            }),
          }
        );

        if (!whatsappResponse.ok) {
          console.error("WhatsApp API error:", await whatsappResponse.text());
        }
      } catch (whatsappError) {
        console.error("Failed to send WhatsApp message:", whatsappError);
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Order received successfully!",
        orderId: `ORD-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}
