const stockData = [
  {
      name: "Tata Consultancy Services",
      quantity: 50,
      average: 3200.00, 
      price: 3100.00,    
      net: "-3.12%",      
      day: "-2.00%",     
      isLoss: true,      
  },
  {
      name: "Reliance Industries",
      quantity: 30,
      average: 2200.00, 
      price: 2350.00,    
      net: "+2.05%",      
      day: "+1.50%",     
      isLoss: false,     
  },
  {
      name: "HDFC Bank",
      quantity: 25,
      average: 1500.00, 
      price: 1450.00,    
      net: "-0.83%",      
      day: "-3.00%",     
      isLoss: true,      
  },
  {
      name: "Infosys",
      quantity: 40,
      average: 1800.00, 
      price: 1850.00,    
      net: "+1.11%",      
      day: "+1.80%",     
      isLoss: false,     
  },
  {
      name: "Bharti Airtel",
      quantity: 20,
      average: 650.00,  
      price: 600.00,     
      net: "-4.50%",      
      day: "-2.50%",     
      isLoss: true,      
  },
  {
      name: "Hindustan Unilever",
      quantity: 15,
      average: 2500.00, 
      price: 2550.00,    
      net: "+1.00%",      
      day: "+1.00%",     
      isLoss: false,     
  },
  {
      name: "Larsen & Toubro",
      quantity: 18,
      average: 1200.00, 
      price: 1150.00,    
      net: "-2.50%",      
      day: "-0.75%",     
      isLoss: true,      
  },
  {
      name: "State Bank of India",
      quantity: 22,
      average: 500.00,  
      price: 525.00,     
      net: "+5.00%",      
      day: "+2.10%",     
      isLoss: false,     
  },
  {
      name: "Maruti Suzuki",
      quantity: 12,
      average: 7500.00, 
      price: 7300.00,    
      net: "-3.20%",      
      day: "-1.30%",     
      isLoss: true,      
  },
  {
      name: "Wipro",
      quantity: 35,
      average: 400.00,  
      price: 425.00,     
      net: "+6.25%",      
      day: "+3.50%",     
      isLoss: false,     
  },
  {
      name: "Asian Paints",
      quantity: 28,
      average: 3000.00, 
      price: 2900.00,    
      net: "-2.80%",      
      day: "-2.80%",     
      isLoss: true,      
  },
  {
      name: "HCL Technologies",
      quantity: 20,
      average: 900.00,  
      price: 950.00,     
      net: "+5.56%",      
      day: "+1.20%",     
      isLoss: false,     
  },
  {
      name: "Adani Green Energy",
      quantity: 10,
      average: 1700.00, 
      price: 1600.00,    
      net: "-5.88%",      
      day: "-4.00%",     
      isLoss: true,      
  },
  {
      name: "ICICI Bank",
      quantity: 14,
      average: 750.00,  
      price: 800.00,     
      net: "+9.33%",      
      day: "+2.20%",     
      isLoss: false,     
  },
  {
      name: "Bajaj Finance",
      quantity: 25,
      average: 5000.00, 
      price: 4800.00,    
      net: "-4.00%",      
      day: "-2.50%",     
      isLoss: true,      
  },
];



   const positions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  const watchlists = [
    { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
    { name: "ONGC", price: 116.8, percent: "-0.09%", isDown: true },
    { name: "TCS", price: 3194.8, percent: "-0.25%", isDown: true },
    { name: "KPITTECH", price: 266.45, percent: "3.54%", isDown: false },
    { name: "QUICKHEAL", price: 308.55, percent: "-0.15%", isDown: true },
    { name: "WIPRO", price: 577.75, percent: "0.32%", isDown: false },
    { name: "M&M", price: 779.8, percent: "-0.01%", isDown: true },
    { name: "RELIANCE", price: 2112.4, percent: "1.44%", isDown: false },
    { name: "HUL", price: 512.4, percent: "1.04%", isDown: false },
    { name: "BAJAJ", price: 3800.5, percent: "-0.45%", isDown: true },
    { name: "TATASTEEL", price: 102.3, percent: "-1.22%", isDown: true },
    { name: "ICICIBANK", price: 875.5, percent: "0.90%", isDown: false },
    { name: "SUNPHARMA", price: 712.3, percent: "-0.87%", isDown: true },
    { name: "ADANIPORTS", price: 675.8, percent: "1.33%", isDown: false },
    { name: "COALINDIA", price: 192.7, percent: "-0.98%", isDown: true },
    { name: "IOC", price: 113.2, percent: "0.75%", isDown: false },
    { name: "ULTRACEMCO", price: 4099.9, percent: "-2.10%", isDown: true },
    { name: "TECHM", price: 1421.6, percent: "0.61%", isDown: false },
    { name: "HEROMOTOCO", price: 2842.3, percent: "-0.54%", isDown: true },
    { name: "LT", price: 1552.2, percent: "0.25%", isDown: false },
    { name: "MARUTI", price: 7211.7, percent: "-0.14%", isDown: true },
    { name: "AXISBANK", price: 724.5, percent: "1.02%", isDown: false },
    { name: "HCLTECH", price: 1121.2, percent: "-1.15%", isDown: true },
    { name: "NTPC", price: 105.3, percent: "0.37%", isDown: false },
    { name: "SBIN", price: 482.4, percent: "-0.92%", isDown: true },
    { name: "ASIANPAINT", price: 3189.6, percent: "0.78%", isDown: false },
    { name: "NESTLEIND", price: 17750.2, percent: "-0.67%", isDown: true },
    { name: "VEDL", price: 329.5, percent: "0.98%", isDown: false },
    { name: "UPL", price: 543.3, percent: "-0.12%", isDown: true },
    { name: "BPCL", price: 452.2, percent: "1.05%", isDown: false },
    { name: "ZEEL", price: 272.4, percent: "-0.78%", isDown: true },
    { name: "SHREECEM", price: 23801.5, percent: "0.53%", isDown: false },
    { name: "DRREDDY", price: 4298.8, percent: "-0.36%", isDown: true },
    { name: "HINDALCO", price: 355.7, percent: "1.11%", isDown: false },
    { name: "JSWSTEEL", price: 691.3, percent: "-0.89%", isDown: true },
    { name: "MOTHERSUMI", price: 233.1, percent: "0.27%", isDown: false },
    { name: "BHARTIARTL", price: 715.9, percent: "-1.07%", isDown: true },
    { name: "POWERGRID", price: 175.4, percent: "1.23%", isDown: false },
    { name: "DABUR", price: 521.2, percent: "-0.45%", isDown: true },
    { name: "DIVISLAB", price: 4530.7, percent: "0.69%", isDown: false },
    { name: "GRASIM", price: 1438.4, percent: "-0.22%", isDown: true },
    { name: "SBILIFE", price: 925.6, percent: "0.87%", isDown: false },
    { name: "BRITANNIA", price: 3489.3, percent: "-1.56%", isDown: true },
    { name: "AMBUJACEM", price: 374.1, percent: "1.28%", isDown: false },
    { name: "HDFCLIFE", price: 631.5, percent: "-0.37%", isDown: true },
    { name: "EICHERMOT", price: 2845.6, percent: "0.74%", isDown: false },
    { name: "GAIL", price: 137.7, percent: "-1.02%", isDown: true },
    { name: "CIPLA", price: 896.4, percent: "1.12%", isDown: false },
    { name: "RECLTD", price: 168.3, percent: "-0.27%", isDown: true },
    { name: "PEL", price: 1554.1, percent: "0.56%", isDown: false },
    { name: "BIOCON", price: 381.6, percent: "-0.89%", isDown: true },
    { name: "SIEMENS", price: 2032.5, percent: "0.63%", isDown: false },
    { name: "SRTRANSFIN", price: 1221.9, percent: "-1.44%", isDown: true },
    { name: "LICHSGFIN", price: 417.8, percent: "1.15%", isDown: false },
    { name: "ADANIGREEN", price: 916.3, percent: "-0.39%", isDown: true },
    { name: "BEL", price: 187.4, percent: "0.27%", isDown: false },
    { name: "HAVELLS", price: 1225.3, percent: "-0.65%", isDown: true },
    { name: "ADANIPOWER", price: 85.3, percent: "0.78%", isDown: false },
    { name: "DLF", price: 329.9, percent: "-1.11%", isDown: true },
    { name: "MGL", price: 1167.6, percent: "1.01%", isDown: false },
    { name: "GODREJCP", price: 835.4, percent: "-0.87%", isDown: true },
    { name: "TITAN", price: 2689.5, percent: "0.92%", isDown: false },
    { name: "PAGEIND", price: 30001.2, percent: "-0.54%", isDown: true },
    { name: "PVR", price: 1342.6, percent: "1.34%", isDown: false },
    { name: "MANAPPURAM", price: 187.9, percent: "-0.23%", isDown: true },
    { name: "MFSL", price: 950.2, percent: "0.43%", isDown: false },
    { name: "GLENMARK", price: 513.6, percent: "-1.12%", isDown: true },
    { name: "BOSCHLTD", price: 13350.7, percent: "1.05%", isDown: false },
    { name: "ATGL", price: 1945.3, percent: "-0.76%", isDown: true },
    { name: "ESCORTS", price: 1310.8, percent: "0.67%", isDown: false },
    { name: "BHEL", price: 72.4, percent: "-0.95%", isDown: true },
    { name: "OBEROIRLTY", price: 656.3, percent: "1.21%", isDown: false },
    { name: "HDFCAMC", price: 2970.5, percent: "-1.03%", isDown: true },
    { name: "NAM-INDIA", price: 351.7, percent: "0.89%", isDown: false },
    { name: "LTTS", price: 3820.4, percent: "-1.28%", isDown: true },
    { name: "PERSISTENT", price: 4805.3, percent: "1.35%", isDown: false },
    { name: "CUMMINSIND", price: 1375.4, percent: "-0.34%", isDown: true },
    { name: "ICICIGI", price: 1511.7, percent: "0.87%", isDown: false }
];


  module.exports = {stockData , positions , watchlists};
  
  