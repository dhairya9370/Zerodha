import React from 'react';
import { 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  List, 
  ListItem, 
  Divider,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';

// Custom Hyperlink Component Import
import HyperLink from '../HyperLink';

const quickLinks = [
  "1. Track account opening", 
  "2. Track segment activation", 
  "3. Intraday margins", 
  "4. Kite user manual", 
  "5. Learn how to create a ticket"
];

const AccOpening = [
  { title: "Resident individual", link: "#" },
  { title: "Minor", link: "#" },
  { title: "Non Resident Indian (NRI)", link: "#" },
  { title: "Company, Partnership, HUF and LLP", link: "#" },
  { title: "Glossary", link: "#" }
];

const yourAcc = [
  { title: "Your Profile", link: "#" },
  { title: "Account modification", link: "#" },
  { title: "Client Master Report (CMR) and Depository Participant (DP)", link: "#" },
  { title: "Nomination", link: "#" },
  { title: "Transfer and conversion of securities", link: "#" }
];

const kite = [
  { title: "IPO", link: "#" },
  { title: "Trading FAQs", link: "#" },
  { title: "Margin Trading Facility (MTF) and Margins", link: "#" },
  { title: "Charts and orders", link: "#" },
  { title: "Alerts and Nudges", link: "#" },
  { title: "General", link: "#" }
];

const funds = [
  { title: "Add money", link: "#" },
  { title: "Withdraw money", link: "#" },
  { title: "Add bank accounts", link: "#" },
  { title: "eMandates", link: "#" }
];

const consoleData = [
  { title: "Portfolio", link: "#" },
  { title: "Corporate actions", link: "#" },
  { title: "Funds statement", link: "#" },
  { title: "Reports", link: "#" },
  { title: "Profile", link: "#" },
  { title: "Segments", link: "#" }
];

const coin = [
  { title: "Mutual funds", link: "#" },
  { title: "National Pension Scheme (NPS)", link: "#" },
  { title: "Fixed Deposit (FD)", link: "#" },
  { title: "Features on Coin", link: "#" },
  { title: "Payments and Orders", link: "#" },
  { title: "General", link: "#" }
];

// Reusable Custom Accordion Component
function CustomAccordion({ icon, header, details, defaultExpanded = false }) {
  return (
    <Accordion 
      disableGutters 
      elevation={0} 
      defaultExpanded={defaultExpanded}
      sx={{ 
        border: '1px solid #e5e7eb',
        borderRadius: '4px !important',
        overflow: 'hidden',
        mb: 1.5,
        '&::before': { display: 'none' } // Disables default MUI separating line artifact
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" sx={{ fontSize: '1.6rem' }} />}
        sx={{
          pl: 0,
          height: 64,
          minHeight: 64,
          '& .MuiAccordionSummary-content': { margin: 0, alignItems: 'center' },
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        {/* Boxed Left Side Icon Segment */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: 60, 
            height: 64, 
            bgcolor: '#fcfdfe', 
            borderRight: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb',
            mr: 3
          }}
        >
          {icon}
        </Box>
        <Typography sx={{ fontWeight: 500, fontSize: '1.2rem', color: '#313131' }}>
          {header}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ pl: 10, pb: 4,pt:3 }}>
        <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {details.map((detail, idx) => (
            <ListItem 
              key={idx} 
              sx={{ 
                p: 0, 
                display: 'list-item', 
                listStyleType: 'disc', 
                ml: 2, 
                color: '#2563eb' // Matches the blue bullet points from your image
              }}
            >
              {/* <HyperLink title={detail.title} link={detail.link} size={15} /> */}
              <Link href={detail.link} underline="none" sx={{ color: '#2563eb', fontSize: '1.1rem', fontWeight: 400, ml: 0.5 }}>
                {detail.title}
              </Link>
             </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default function SupportCategories() {
  return (
    <Box 
      sx={{ 
        width: "100%", 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between', 
        gap: 5,
        my: 6, 
        px: { xs: 3, md: 20 } // Fluid spacing wrappers
      }}
    >
      {/* LEFT COLUMN: Accordions */}
      <Box sx={{ width: { xs: '100%', md: '68%' }, display: 'flex', flexDirection: 'column',gap:2 }}>
        <CustomAccordion icon={<ControlPointIcon color="primary" />} header="Account Opening" details={AccOpening}/>
        <CustomAccordion icon={<AccountCircleOutlinedIcon color="primary" />} header="Your Zerodha Account" details={yourAcc} />
        <CustomAccordion icon={<PlayArrowOutlinedIcon color="primary" />} header="Kite" details={kite} />
        <CustomAccordion icon={<CurrencyRupeeOutlinedIcon color="primary" />} header="Funds" details={funds} />
        <CustomAccordion icon={<AlternateEmailOutlinedIcon color="primary" />} header="Console" details={consoleData} />
        <CustomAccordion icon={<TollOutlinedIcon color="primary" />} header="Coin" details={coin} />
      </Box>
      
      {/* RIGHT COLUMN: Sidebar Links & Broadcast Notices */}
      <Box sx={{ width: { xs: '100%', md: '28%' }, display: "flex", flexDirection: "column", gap: 3.5 }}>
        
        {/* Notice Info Box */}
        <Box 
          sx={{ 
            width: "100%", 
            bgcolor: '#fff9f5', 
            borderLeft: "5px solid #ff6b00", 
            p: 3, 
            borderRadius: '0 4px 4px 0' 
          }}
        >
          <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ListItem sx={{ p: 0, display: 'list-item', listStyleType: 'disc', ml: 2, color: '#3b82f6' }}>
              <Link href="#" underline="always" sx={{ color: '#2563eb', fontSize: '0.95rem', fontWeight: 400 }}>
                Offer for sale (OFS) – May 2026
              </Link>
            </ListItem>
            <ListItem sx={{ p: 0, display: 'list-item', listStyleType: 'disc', ml: 2, color: '#3b82f6' }}>
              <Link href="#" underline="always" sx={{ color: '#2563eb', fontSize: '0.95rem', fontWeight: 400 }}>
                Latest Intraday leverages and Square-off timings
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* Quick Links Card Component */}
        <Box 
          sx={{ 
            width: "100%", 
            display: "flex", 
            flexDirection: "column", 
            border: '1px solid #e5e7eb', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ bgcolor: '#fbfcfd', px: 2.5, py: 2, borderBottom: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontWeight: 500, color: '#333333', fontSize: '1rem' }}>
              Quick links
            </Typography>
          </Box>
          
          <List sx={{ p: 0 }}>
            {quickLinks.map((name, idx) => (
              <React.Fragment key={idx}>
                <ListItem sx={{ px: 2.5, py: 2 }}>
                  <Link 
                    href="#" 
                    underline="hover" 
                    sx={{ color: '#2563eb', fontSize: '0.95rem', fontWeight: 400 }}
                  >
                    {name}
                  </Link>
                </ListItem>
                {idx < quickLinks.length - 1 && <Divider sx={{ borderColor: '#e5e7eb' }} />}
              </React.Fragment>
            ))}
          </List>
        </Box>

      </Box>
    </Box>
  );
}