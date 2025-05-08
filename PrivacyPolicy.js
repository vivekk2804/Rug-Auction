import React from 'react';
import { useEffect } from 'react';
import {Box, Typography, Divider} from '@mui/material';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  return (
    <>
         <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
           
           <Typography variant="body1" color="textSecondary" marginLeft="30px">
             <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt; 
             <span style={{ color: "#5B2E1E" }}> About us</span>
           </Typography>
           
         </Box>
          <Box mt={5}>
                 <Typography
                   variant="h4"
                   color="#6C3C2B"
                   sx={{
                     fontFamily: "serif",
                     paddingLeft: { xs: 2, sm: 8, md: 8 },
                     paddingRight: { xs: 4, sm: 8, md: 8 },
                   }}
                 >
                   Privacy Policy
                 </Typography>
                 <Divider
                   color="#DCD0BA"
                   sx={{
                     marginLeft: { xs: 2, sm: 8, md: 8 },
                     marginRight: { xs: 4, sm: 8, md: 8 },
                   }}
                 />
               </Box>
              <Box  sx={{ maxWidth: "80%" ,mt: 3, marginLeft:{xs: 4,sm: 12, md: 12}}}>
                <Typography variant='h6' color='#000000' sx={{fontWeight: "bold", fontFamily: "inherit"}}>
                Rug Auctions Privacy Policy
                </Typography>
                <Typography variant='body1' sx={{mt: 2,}}>
                Our Commitment to Privacy
                </Typography>
                <Typography variant='body1'>
                LiveAuctioneers is committed to maintaining user privacy on the LiveAuctioneers Online Platform, accessed via any LiveAuctioneers website, application, service, or tool, regardless of how you access or use them, including through mobile devices. This Privacy Policy explains how LiveAuctioneers LLC and its affiliates (collectively "LiveAuctioneers", or "we", or "us", or "our") collects, uses, and shares your personal information in connection with your use of the Online Platform and our services, and explains your choices for how we handle your personal information.
                </Typography>
                <Typography variant='body1'sx={{mt:1,}}>
                By creating an account, you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree to its terms and conditions, you should not use or access our Online Platform. By accepting the Privacy Policy, you expressly consent to our use and disclosure of your personal data in accordance with the Policy. The Privacy Policy is incorporated into and subject to the terms of any agreement you sign with LiveAuctioneers and becomes applicable upon our acceptance of you as a registered user. If you have any additional questions about our Privacy Policy, please feel free to contact us at info@liveauctioneers.com.
                For the purposes of this Privacy Policy, the term "personal data" means any information that identifies you or which allows you to be identified when combined with other information.
                </Typography>
                <Typography variant='body1' sx={{mt: 2,}}>
                Personal Data We Collect
                </Typography>
                <Typography variant='body1'>
                if you choose to use our services, we may require collect, use, store, and transfer various categories of personal data about you.
                Where possible, we indicate fields that are required and those that are optional. You are not required to provide data if you choose not to use a particular service or feature.
                Data You Give Us
                </Typography>
                <Typography variant='body1'>
                When you use our Online Platform, you may provide personal data through direct interactions, such as completing forms.
                Account Data includes email address, username, and password.
                </Typography>
                <Typography variant='body1'>
                Profile Data includes first name, last name, address, phone number, and internet protocol (IP) address.
                Financial Data includes credit card information used for Payrix, a third party payment processor that processes payments on our Online Platform. In performing their services, Payrix acts as both data controllers and data processors of your personal data. For any data processing operations where Payrix acts as a data controller, Payrix’s Privacy Policy Privacy Policy applies. By using our Online Platform, you are agreeing to Payrix’s Privacy Policies.
                </Typography>
                <Typography variant='body1'>
                Email Preference Data includes your preferences in receiving marketing from us.
                </Typography>
                <Typography variant='body1'>
                Communication Data includes personal correspondence sent via emails, letters, or messages sent through our Online Platform, including feedback and survey responses.
                Bank Account Information includes the name, account number, and current balance of your account at a financial institution from which you may make payments. We use Plaid Inc. (“Plaid”) to authenticate information regarding your account. We may use this information to execute transactions and debit your account. By using our Online Platform, you grant us and Plaid the right, power, and authority to act on your behalf to access and transmit your personal and financial information from your financial institution. You agree to your personal and financial information being transferred, stored, and processed by Plaid in accordance with the Plaid Privacy Policy
                </Typography>
                <Typography variant='body1' sx={{mt: 2}}>
                Payment processor Payrix to ensure safe payments when you win items on our Online Platform and choose to pay via LiveAuctioneers Payments.
                </Typography>
                <Typography variant='body1'>
                Email service providers and push notification tools who support us in sending transactional and marketing or promotional messages.
                </Typography>
                <Typography variant='body1'>
                Service providers who provide customer service and sales support tools.
                </Typography>
                <Typography variant='body1'>
                Service providers, who assist us in verifying and authenticating identities, detecting and preventing fraud, and securing the Online Platform against unlawful activity
                </Typography>
                <Typography variant='body1' sx={{mt: 2}}>
                Service providers, such as Plaid, who assist us in authenticating information regarding your financial institution account.
                </Typography>
                <Typography variant='body1'>
                Analytics partners who allow us to analyze Online Platform usage so that we may make it easier, safer, and quicker to use.
                </Typography>
                <Typography variant='body1'>
                Advertising partners to inform you about products and services on third party sites
                </Typography>
                <Typography variant='body1'>
                we require third parties acting as data processors to respect the security of your personal data and to treat it in compliance with the law. We do not allow our third party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                </Typography>
                <Typography variant='body1' sx={{mt: 2}}>
                Data We Collect Automatically
                </Typography>
                <Typography variant='body1'>
                When you use our Online Platform, we may automatically collect data about your usage and your device so we can better understand, protect, and improve our service for you and our community. We collect this personal data by using cookies, web beacons, unique identifiers, and other similar technologies.
                </Typography>
                <Typography variant='body1'>
                Usage Data includes data about your activities on our Online Platform such as clicks, bids, searches, auctioneers you follow, and browsing actions and patterns.
                </Typography>
                <Typography variant='body1' sx={{mt: 2}}>
                Technical Data includes internet protocol (IP) address, location information, your login data, browser type and version, device type and model, device identifiers, app errors, and debugging info.
                </Typography>
                <Typography variant='body1'>
                Transactional Data includes records of transactions and payments related to items you purchase through our Online Platform.
                </Typography>

                <Typography variant='body1'>
                To learn more about the cookies that may be served through our Online Platform and how you can control our use of cookies and third party analytics, please see our Cookie Policy.
                </Typography>
                <Typography variant='body1' sx={{mt: 2}}>
                We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific Site feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy notice.
                    </Typography>
                    <Typography variant='body1' sx={{mt:2}}>
                    We do not collect any sensitive data about you, including race or ethnicity, political opinions, religious or philosophical beliefs, trade union membership, genetics, biometrics, health, sex life, or sexual orientation. We also do not collect data about criminal convictions or offenses.
                </Typography>

                <Typography variant='body1' sx={{mt:2}}>
                Where possible, we indicate fields that are required and those that are optional. You are not required to provide data if you choose not to use a particular service or feature.
                </Typography>
              </Box>
    </>
  )
}

export default PrivacyPolicy