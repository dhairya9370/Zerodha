import React, { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography 
} from '@mui/material';
import HyperLink from '../HyperLink';
const equityRows = [
  { charge: "Brokerage", delivery: "Zero Brokerage", intraday: "0.03% or Rs. 20/executed order whichever is lower", futures: "0.03% or Rs. 20/executed order whichever is lower", options: "Flat Rs. 20 per executed order" },
  { charge: "STT/CTT", delivery: "0.1% on buy & sell", intraday: "0.025% on the sell side", futures: "0.05% on the sell side", options: "• 0.15% of the intrinsic value...\n• 0.15% on sell side (on premium)" },
  { charge: "Transaction charges", delivery: "NSE: 0.00307%\nBSE: 0.00375%", intraday: "NSE: 0.00307%\nBSE: 0.00375%", futures: "NSE: 0.00183%\nBSE: 0", options: "NSE: 0.03553% (on premium)\nBSE: 0.0325% (on premium)" },
  { charge: "GST", delivery: "18% on (brokerage + SEBI charges + transaction charges)", intraday: "18% on (brokerage + SEBI charges + transaction charges)", futures: "18% on (brokerage + SEBI charges + transaction charges)", options: "18% on (brokerage + SEBI charges + transaction charges)" },
  { charge: "SEBI charges", delivery: "₹10 / crore", intraday: "₹10 / crore", futures: "₹10 / crore", options: "₹10 / crore" },
  { charge: "Stamp charges", delivery: "0.015% or ₹1500 / crore on buy side", intraday: "0.003% or ₹300 / crore on buy side", futures: "0.002% or ₹200 / crore on buy side", options: "0.003% or ₹300 / crore on buy side" },
];
const currencyRows = [
  { charge: "Brokerage", futures: "0.03% or ₹ 20/executed order whichever is lower", options: "₹ 20/executed order" },
  { charge: "STT/CTT", futures: "No STT", options: "No STT" },
  { charge: "Transaction charges", futures: "NSE: 0.00035%\nBSE: 0.00045%", options: "NSE: 0.0311%\nBSE: 0.001%" },
  { charge: "GST", futures: "18% on (brokerage + SEBI charges + transaction charges)", options: "18% on (brokerage + SEBI charges + transaction charges)" },
  { charge: "SEBI charges", futures: "₹10 / crore", options: "₹10 / crore" },
  { charge: "Stamp charges", futures: "0.0001% or ₹10 / crore on buy side", options: "0.0001% or ₹10 / crore on buy side" },
];

const commodityRows = [
  { charge: "Brokerage", futures: "0.03% or Rs. 20/executed order whichever is lower", options: "₹ 20/executed order" },
  { charge: "STT/CTT", futures: "0.01% on sell side (Non-Agri)", options: "0.05% on sell side" },
  { charge: "Transaction charges", futures: "MCX: 0.0021%\nNSE: 0.0001%", options: "MCX: 0.0418%\nNSE: 0.001%" },
  { charge: "GST", futures: "18% on (brokerage + SEBI charges + transaction charges)", options: "18% on (brokerage + SEBI charges + transaction charges)" },
  { charge: "SEBI charges", futures: "Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore", options: "₹10 / crore" },
  { charge: "Stamp charges", futures: "0.002% or ₹200 / crore on buy side", options: "0.003% or ₹300 / crore on buy side" },
];

// 1. DYNAMIC TAB PANEL COMPONENT
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`pricing-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

// 2. REUSABLE CUSTOM TABLE WRAPPER
function PricingTableGrid({ headers, rows }) {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 1 }}>
      <Table sx={{ minWidth: 650 }} aria-label="pricing structural table">
        <TableHead>
          <TableRow sx={{ bgcolor: '#fafafa' }}>
            {/* Blank cell for the left column row labels */}
            <TableCell sx={{ width: '20%' }} /> 
            {headers.map((header, idx) => (
              <TableCell key={idx} sx={{ fontWeight: 'bold', color: '#555' }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => {
            // Extract row structural properties dynamically minus 'charge' property label
            const { charge, ...cellData } = row;
            return (
              <TableRow key={rowIndex} sx={{ '&:nth-of-type(even)': { bgcolor: '#fafafa' } }}>
                <TableCell component="th" scope="row" sx={{ color: '#656565' }}>
                  {charge}
                </TableCell>
                {Object.values(cellData).map((text, cellIndex) => (
                  <TableCell key={cellIndex} sx={{ whiteSpace: 'pre-line', color: '#333', verticalAlign: 'top' }}>
                    {text}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// 3. MAIN COMPONENT EXPORT
export default function UniversalPricingDashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 15,mb:4, px: 25,}}>
      
      {/* APP BAR NAVIGATION BAR */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '1.25rem',
              fontWeight: 500,
              mr: 2,
              
            }
          }}
        >
          <Tab label="Equity" />
          <Tab label="Currency" />
          <Tab label="Commodity" />
        </Tabs>
      </Box>

      {/* CONTENT GRID CONFIGURATION SECTIONS */}
      
      {/* EQUITY TAB SECTION */}
      <TabPanel value={tabValue} index={0}>
        <PricingTableGrid 
          headers={["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"]} 
          rows={equityRows} 
        />
      </TabPanel>

      {/* CURRENCY TAB SECTION */}
      <TabPanel value={tabValue} index={1}>
        <PricingTableGrid 
          headers={["Currency futures", "Currency options"]} 
          rows={currencyRows} 
        />
      </TabPanel>

      {/* COMMODITY TAB SECTION */}
      <TabPanel value={tabValue} index={2}>
        <PricingTableGrid 
          headers={["Commodity futures", "Commodity options"]} 
          rows={commodityRows} 
        />
      </TabPanel>
      <Typography variant="h6" color="textSecondary" align="center" sx={{ mt: 4,display:"flex",justifyContent:"center",alignItems:"center",gap:0.7, }}>   
        <HyperLink title="Calculate your costs upfront " link="#" selected={true} size={20}/>
        using our brokerage calculator
    </Typography>

    </Box>
  );
}