
const basicFeatures = [
  "Access all basic category books",
  "AI tutoring",
  "100 replies from your AI Tutor daily",
  "Interactive lessons and simulations",
  "Community support",
];

const proFeatures = [
  "Everything under basic plan",
  "Access to all pro category books",
  "Unlimited replies from your AI tutor",

];



export const plans = {
  basic: [
    {
      name: "Monthly",
      price: 3500,
      discount: null,
      dollarPrice: 15,
      features: basicFeatures
    },
    {
      name: "Quarterly",
      price: 8250,
      discount: -2250,
      dollarPrice: 30,
      dollarDiscount: 15,
      features: basicFeatures
    },
    {
      name: "Yearly",
      price: 30000,
      discount: -12000,
      dollarPrice: 96,
      dollarDiscount: 84,
      features: basicFeatures
    },
  ],

  pro: [
    {
      name: "Monthly",
      price: 16000,
      discount: null,
      dollarPrice: 20,
      features: proFeatures
    },
    {
      name: "Quarterly",
      price: 39000,
      discount: -9000,
      dollarPrice: 45,
      dollarDiscount: 15,
      features: proFeatures
    },
    {
      name: "Yearly",
      price: 120000,
      discount: -72000,
      dollarPrice: 120,
      dollarDiscount: 120,
      features: proFeatures
    },
  ]
}

