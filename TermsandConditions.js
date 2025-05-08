import React from 'react'
import { useEffect } from 'react';
import {Box, Typography, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
const TermsandConditions = () => {
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
                       Terms & Conditions
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
                    Rug Auctions Terms and Conditions of Use
                    </Typography>
                    <Typography variant='body1' sx={{mt:2, fontWeight:"bold", fontFamily:"inherit"}}>
                    01. Definitions
                    </Typography>
                    <Typography variant='body1'>
                    “Auction House” means a seller or dealer of collectibles, antiques, jewelry, fine art, or other Property that has registered with LiveAuctioneers to conduct Live Auctions through the Site.
                    </Typography>
                    <Typography variant='body1' sx={{mt:1}}>
                    “Buyer” means the person, authorized agent, or entity (including you) that successfully bids for Property that the Company offers for sale at a Live Auction conducted on the LiveAuctioneers Site.
                    </Typography>
                    <Typography variant='body1' sx={{mt: 1}}>
                    “LiveAuctioneers Marks” means the LiveAuctioneers' domain names, trademarks, logos, and other branding elements used in furtherance of the LiveAuctioneers Services and/or in the performance of this Agreement.
                    </Typography>
                    <Typography variant='body1' sx={{mt:1}}>
                    “LiveAuctioneers Services” or “Services” means the online internet website platform provided by LiveAuctioneers that allows prospective purchasers the ability to access Auction Houses' listings for the sale of Property and to bid for such Property through one or more Live Auctions conducted by an Auction House on the LiveAuctioneers Site.
                    </Typography>
                    <Typography variant='body1' sx={{mt:1}}>
                    “LiveAuctioneers Site” or “Site” means the online venue through which prospective purchasers of Property vie and bid on Property listed by Auction Houses.
                    </Typography>
                    <Typography variant='body1' sx={{mt:1}}>
                    “Live Auction” means an auction wherein LiveAuctioneers' registered users can bid either through absentee bids or real-time bids through the internet using LiveAuctioneers' technology on Property being auctioned on the floor of an Auction House or in another such live event.
                    </Typography>
                    <Typography variant='body1' sx={{mt:1}}>
                    “Live.Payments” means the payment services LiveAuctioneers provides to Auction Houses and Buyers to coordinate and facilitate a Buyer's purchase of Property from the Company in connection with a Live Auction. Access the Live.Payments Terms & Conditions here.
                        </Typography>
                        <Typography variant='body1' sx={{mt:1}}>
                        “Property” means the goods and/or services that Auction Houses list for sale through the LiveAuctioneers Site.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2 , fontFamily:"inherit", fontWeight:"bold"}}>
                        02. Access to the Service
                        </Typography>
                        <Typography variant='body1'>
                        Subject to your acceptance of and compliance with this Agreement, LiveAuctioneers grants to you
                         a personal, non-exclusive, non-transferable, revocable, limited, worldwide license to use the 
                         Service and associated software and access the Site for your personal non-commercial use.
                          All of LiveAuctioneers' rights and remedies are expressly reserved, and LiveAuctioneers may 
                          revoke this limited license, in whole or in part, at any time upon notice. LiveAuctioneers
                           may change, modify, suspend, or discontinue in its entirety or any aspect of the Service at any time. 
                           LiveAuctioneers may also impose limits on certain features or restrict or prohibit your access
                            to parts or all of the Service or the Site at any time, all without notice or liability. 
                            LiveAuctioneers reserves the right to terminate your access to the Service or the Site without
                             notice if you violate this Agreement or for any reason at LiveAuctioneers' discretion. 
                             LiveAuctioneers reserves the right to access, read, preserve, and disclose any information 
                             as we reasonably believe is necessary to: (a) satisfy any applicable law, regulation, legal
                              process or governmental request; (b) enforce this Agreement or the Privacy Policy, including 
                              investigation of potential violations hereof; (c) detect, prevent, or otherwise address fraud,
                               security or technical issues; (d) respond to user support requests; or (e) protect the rights, 
                               property or safety of LiveAuctioneers, the Auction Houses, other users of the Site and the public.
                                You are responsible for all actions on the Service by you or by anyone using your password or account,
                                 and for taking all reasonable steps to ensure that no unauthorized person shall have access to your password 
                                 or account. You agree not to share your password with any other person or entity, not to re-use your 
                                 user name and password combination on any other website or service, and agree that you are solely
                                  responsible for all actions taken by individuals who use the Service through your password or account.
                                   Without limiting the foregoing, it is your sole responsibility to: (i) control the dissemination and use 
                                   of your user name and password; (ii) authorize, monitor, and control access to and use of your Service account, 
                                   user name, and password; and (iii) promptly inform LiveAuctioneers of any need to deactivate your user name or password.
                                    No agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or
                                     created between you and LiveAuctioneers by this Agreement or your use of or access to the Services or the Site.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2,fontFamily:"inherit",fontWeight:"bold"}}>
                        03. Live Auction Eligibility    
                        </Typography>
                        <Typography variant='body1'>
                        Each Auction House that conducts a Live Auction has separate eligibility requirements that must be met for you to participate in that auction. You may be required to apply for and obtain approval from an Auction House or LiveAuctioneers to participate in a specific Live Auction. Approval to participate in one Live Auction does not guarantee approval to participate in any other Live Auction, conducted either by that Auction House, or another Auction House. Each Auction House has sole and absolute discretion to refuse to approve your eligibility for any live auction.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2, fontWeight:"bold", fontFamily:"inherit"}}>
                        04. Auction House Requirements
                        </Typography>
                        <Typography variant='body1'>
                        The Auction House will list available items on which you may bid. Auction dates and times,
                         as well as the number, character, and order and schedule of the items to be auctioned, are set by
                          the Auction House and are subject to change without notice. Individual lots and items may be modified or changed at any time.
                           Some lots and items that are made available on the auction floor will not be included in the online live auction services. 
                           We do not control the information that is provided by the Auction House, which is made available through our system.
                            We also do not guarantee that the Auction House maintains proper auctioneers' licenses or complies with all applicable laws, rules, and regulations. 
                            The terms and conditions for participation in each auction, including how bids are accepted, rules governing absentee bids, bid increments, bid retraction and cancellation, 
                            the conditions the buyer must meet to purchase an item, as well as the specific conditions of sale (such as warranties, shipping costs, insurance, and the like) 
                            may change for each auction at the sole discretion of the Auction House. The Auction House is required to post its terms and conditions and to maintain such terms
                             throughout the auction period. You agree to be bound by those bidding terms and conditions of sale by agreeing to the Terms. The Terms, in addition to those Auction
                              House terms and conditions, governs your bidding activity, as well as your participation in each auction. The Auction House acts as an auctioneer and makes the sole,
                               final determination concerning bidding on the item, the sale of the item, and the resolution of any disputes. All matters relating to a refund or return of won 
                               items are also determined by the outlined terms and conditions of the Auction House.
                        </Typography>
                        <Typography variant='body1' sx={{fontFamily:"inherit",fontWeight:"bold", mt:2}}>
                        05. LiveAuctioneers is Only a Venue
                        </Typography>
                        <Typography variant='body1'>
                        LiveAuctioneers is not an Auction House and is not conducting Live Auctions.
                         LiveAuctioneers Service allows you to participate in Live Auctions conducted by the 
                         Auction House. LiveAuctioneers is solely a passive conduit to facilitate communication between you 
                         and the Auction House. LiveAuctioneers reserves the right in our sole and absolute discretion to change some 
                         or all of our services at any time. You acknowledge and agree that LiveAuctioneers has no control over the quality, safety, or legality 
                         of the items advertised, the truth or accuracy of the listings, or the ability of the Auction House to sell and the ability of buyers to buy items. 
                         We also do not ensure or guarantee that a buyer or seller will complete a transaction. Because LiveAuctioneers does not control the Live Auctions
                          or the Auction Houses, if you have a dispute with an Auction House, you hereby expressly release LiveAuctioneers (and our shareholders, members, partners,
                           officers, directors, employees, agents, parent, subsidiaries, affiliates, joint venturers, and successors and assigns) from causes of action,
                            suits, claims, demands, judgments, and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected,
                             disclosed and undisclosed, arising out of, or in any way connected with, such disputes. If you are a California resident, you waive California 
                             Civil Code § 1542, as amended from time to time, and any similar statutes, to the extent that such statute(s) prohibits a general release from
                              extending to claims that a creditor does not know or suspect to exist in his/her favor at the time of executing the release, which, if known 
                              by the creditor, would materially affect his/her settlement with the debtor. The Site may include links to third-party sites or services, or
                               information about third-party products or services, which are typically subject to service terms and policies that differ from ours. Therefore, 
                               you should review the terms of use and privacy policies of all sites and services linked to or referred to by our Service. We do not endorse or 
                               take responsibility for these third party offerings, nor do we vet or take responsibility for third-party sites, services or products
                                or for the postings or communications of other users.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2, fontFamily:"inherit", fontWeight:"bold"}}>
                        06. Compliance with Laws
                        </Typography>
                        <Typography variant='body1'>
                        You acknowledge and agree that the use, purchase, distribution, promotion, advertising, and sale of certain products 
                        are subject to federal state, and local regulations, including, but not limited to, firearms,
                         Indian artifacts, recalled products, children's products, alcoholic beverages, coins, and currency. 
                         You further acknowledge and agree that LiveAuctioneers' role concerning the sale of products
                          is limited to providing a conduit through which a prospective purchaser can participate in an auction. 
                          LiveAuctioneers does not review or evaluate the products auctioned, or verify the descriptions given or claims made,
                           by Auction Houses regarding the products. You expressly represent that you shall comply with all applicable federal, 
                           state, and local laws, statutes, ordinances, and regulations relating to your use, purchase, and distribution of any
                            products that you bid upon or purchase through LiveAuctioneers (hereinafter, the "Regulations"), including, but not limited to,
                             (i) the Gun Control Act of 1968 and all regulations promulgated by the Bureau of Alcohol, Tobacco, Firearms, and Explosives
                              (collectively, the "Firearms Regulations"), (ii) the Consumer Products Safety Improvement Act of 2008 and all regulations 
                              promulgated by the U.S. Consumer Products Safety Commission, and (iii) the Indian Arts & Crafts Act of 1990 and 
                              any additional laws and regulations applicable to the sale of Indian arts and crafts. You shall at all times
                               defend, indemnify and hold harmless LiveAuctioneers,
                                its shareholders, members, partners, officers, directors, employees, agents, parent, subsidiaries, affiliates,
                                 joint venturers, and successors and assigns, from, and against, all causes of action, suits, claims, demands,
                                  judgments, liabilities, losses, damages, awards, penalties, fines, costs and expenses (including, but not limited to, reasonable attorney's fees)
                                   of any nature or kind, arising under or resulting from: (i) your use, purchase, or distribution of any products in violation of any Regulations; (ii)
                                    your use of LiveAuctioneers in connection with the purchase of any products subject to any Regulations; and (iii) your alleged or actual violation or breach of any Regulations.
                        </Typography>
                   </Box>
    </>
  )
}

export default TermsandConditions