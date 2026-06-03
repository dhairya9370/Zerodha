import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import HyperLink from './HyperLink';
function Footer() {
    return (
        <Box sx={{
            backgroundColor: "#f6f6f6d1",
            paddingY: 4, paddingX: 25,
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <Box sx={{


                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",

            }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", }}>
                        <img src="media/images/logo.svg" alt="Zerodha" height={20} />
                    </Box>
                    <Typography variant="body2" sx={{ color: "#656565" }}>
                        © 2010 - 2026, Zerodha Broking Ltd.<br></br>
                        All rights reserved.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <XIcon sx={{ color: "#656565", fontSize: 18 }} />
                        <FacebookIcon sx={{ color: "#656565", fontSize: 25, marginLeft: 2 }} />
                        <InstagramIcon sx={{ color: "#656565", fontSize: 25, marginLeft: 2 }} />
                        <LinkedInIcon sx={{ color: "#656565", fontSize: 25, marginLeft: 2 }} />
                    </Box>
                    <Divider />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <YouTubeIcon sx={{ color: "#656565", fontSize: 25, marginRight: 2 }} />
                        <WhatsAppIcon sx={{ color: "#656565", fontSize: 25, marginRight: 2 }} />
                        <TelegramIcon sx={{ color: "#656565", fontSize: 25, }} />
                    </Box>
                    <Box sx={{
                        display: "flex", alignItems: "center", gap: 3, marginTop: 3
                    }}>
                        <img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge" height={29} />
                        <img src="media/images/appstoreBadge.svg" alt="appstoreBadge" height={30} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" sx={{ color: "#313131" }}>
                        Account
                    </Typography>
                    <HyperLink title="Open demat account" link="#"/>
                    <HyperLink title="Minor demat account" link="#"/>
                    <HyperLink title="NRI demat account" link="#"/>
                    <HyperLink title="HUF demat account" link="#"/>
                    <HyperLink title="Commodity" link="#"/>
                    <HyperLink title="Dematerialisation" link="#"/>
                    <HyperLink title="Fund transfer" link="#"/>
                    <HyperLink title="MTF" link="#"/>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" sx={{ color: "#313131" }}>
                        Support
                    </Typography>
                    <HyperLink title="Contact us"  link="#"/>
                    <HyperLink title="Support portal"  link="#"/>
                    <HyperLink title="How to file a complaint?"  link="#"/>
                    <HyperLink title="Status of your complaints"  link="#"/>
                    <HyperLink title="Bulletin"  link="#"/>
                    <HyperLink title="Circular"  link="#"/>
                    <HyperLink title="Z-Connect blog"  link="#"/>
                    <HyperLink title="Downloads"  link="#"/>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" sx={{ color: "#313131" }}>
                        Company
                    </Typography>
                    <HyperLink title="About" link="#" />
                    <HyperLink title="Philosophy" link="#" />
                    <HyperLink title="Press & media" link="#" />
                    <HyperLink title="Careers" link="#" />
                    <HyperLink title="Zerodha Cares (CSR)" link="#" />
                    <HyperLink title="Zerodha.tech" link="#" />
                    <HyperLink title="Open source" link="#" />
                    <HyperLink title="Referral program" link="#" />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" sx={{ color: "#313131" }}>
                        Quick Links
                    </Typography>
                    <HyperLink title="Upcoming IPOs" link="#" />
                    <HyperLink title="Brokerage charges" link="#" />
                    <HyperLink title="Market holidays" link="#" />
                    <HyperLink title="Economic calendar" link="#" />
                    <HyperLink title="Calculators" link="#" />
                    <HyperLink title="Markets" link="#" />
                    <HyperLink title="Sectors" link="#" />
                    <HyperLink title="Gift Nifty" link="#" />
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", marginTop: 7, alignItems: "start"
            }}>


                <Typography variant="caption" sx={{ color: "#818181", }}>
                    Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1 }}>
                    Smart Online Dispute Resolution | Grievances Redressal Mechanism</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    India's largest broker based on networth as per NSE. NSE broker factsheet</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 1, }}>
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</Typography>
                <Typography variant="caption" sx={{ color: "#818181", marginTop: 2, }}>
                    Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</Typography>
            </Box>
            <Box sx={{paddingX:10, display: "flex", justifyContent: "space-evenly", marginTop: 2,flexDirection:"row",alignItems:"center" }}>
                <HyperLink title="NSE" link="#" />
                <HyperLink title="BSE" link="#"/>
                <HyperLink title="MCX" link="#"/>
                <HyperLink title="Terms & conditions" link="#"/>
                <HyperLink title="Policies & procedures" link="#"/>
                <HyperLink title="Privacy policy" link="#"/>
                <HyperLink title="Disclosure" link="#"/>
                <HyperLink title="For investor's attention" link="#"/>
                <HyperLink title="Investor charter" link="#"/>
                </Box>
        </Box>
    );
}

export default Footer;