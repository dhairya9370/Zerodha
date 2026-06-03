import React from 'react';
import { 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableRow, 
  Paper,
  TableHead,
  Typography
} from '@mui/material';
import HyperLink from '../HyperLink';

const accOpenCharges = [
  { type: "Online account", charges: "FREE" },
  { type: "Offline account", charges: "FREE" },
  { type: "NRI account (offline only)", charges: "₹ 500" },
  { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹ 500" },
];

const AMC = [
  { type: "Up to ₹4 lakh", charges: "free" },
  { type: "₹4 lakh - ₹10 lakh", charges: "₹ 100 per year, charged quarterly*" },
  { type: "Above ₹10 lakh", charges: "₹ 300 per year, charged quarterly" },
];

const serviceCharges = [
  { type: "Tickertape", freq: "Monthly / Annual", charges: "Free: 0 | Pro: 249/2399" },
  { type: "Smallcase", freq: "Per transaction", charges: "Buy & Invest More: 100 | SIP: 10" },
  { type: "Kite Connect", freq: "Monthly", charges: "Connect: 500 | Personal: Free" },
];

// REUSABLE & DYNAMIC TABLE GRID
function PricingTableGrid({ headers, rows }) {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 1 }}>
      <Table sx={{ minWidth: 650 }} aria-label="pricing structural table">
        <TableHead>
          <TableRow sx={{ bgcolor: '#fafafa' }}>
            {headers.map((header, idx) => {
              // Automatically distribute column widths dynamically based on total header count
              let columnWidth = `${100 / headers.length}%`;
              if (headers.length === 2) {
                columnWidth = idx === 0 ? '70%' : '30%'; // Make primary description column wider for 2-col tables
              } else if (headers.length === 3) {
                columnWidth = idx === 2 ? '40%' : '30%'; // Balance out 3-col variations elegantly
              }

              return (
                <TableCell 
                  key={idx} 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: '#555', 
                    width: columnWidth 
                  }}
                >
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => {
            // Convert object keys directly to a sequence array to print sequentially
            const cells = Object.values(row);

            return (
              <TableRow 
                key={rowIndex} 
                sx={{ '&:nth-of-type(even)': { bgcolor: '#fafafa' } }}
              >
                {cells.map((cellText, cellIndex) => {
                  // Make the very first text column behave as the structural header title
                  const isFirstColumn = cellIndex === 0;

                  return (
                    <TableCell 
                      key={cellIndex}
                      component={isFirstColumn ? "th" : "td"}
                      scope={isFirstColumn ? "row" : undefined}
                      sx={{ 
                        whiteSpace: 'pre-line', 
                        color: isFirstColumn ? '#656565' : '#333', 
                        fontWeight: isFirstColumn ? 500 : 400,
                        verticalAlign: 'top' 
                      }}
                    >
                      {cellText}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function ChargesTables() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 6, mb: 4, px: 25 }}>
        
        {/* Table 1: Account Opening */}
        <Typography variant='h5' sx={{ mb: 2, fontWeight: 500, color: '#222' }}>
          Charges for account opening
        </Typography>
        <PricingTableGrid 
          headers={["Type of account", "Charges"]} 
          rows={accOpenCharges} 
        />
        
        {/* Table 2: Demat AMC */}
        <Typography variant='h5' sx={{ mb: 2, mt: 10, fontWeight: 500, color: '#222' }}>
          Demat AMC (Annual Maintenance Charge)
        </Typography>
        <PricingTableGrid 
          headers={["Value of holdings", "AMC"]} 
          rows={AMC} 
        />
        <Typography variant="body2" sx={{mt:1,px:0.5,gap:0.5}} >* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.</Typography>
        {/* Table 3: Optional Services */}
        <Typography variant='h5' sx={{ mb: 2, mt: 10, fontWeight: 500, color: '#222' }}>
          Charges for optional value added services
        </Typography>
        <PricingTableGrid 
          headers={["Service", "Billing Frequency", "Charges"]} 
          rows={serviceCharges} 
        />
        
    </Box>
  );
}