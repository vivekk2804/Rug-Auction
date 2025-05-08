import React, { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const faqs = [
  { question: "What are the additional fees to a purchase on top of the hammer price?", answer: "Additional fees may include a buyer's premium, taxes, and shipping costs." },
  { question: "How can I make shipping arrangements to my home or another address?", answer: "You can contact our logistics team to arrange shipment." },
  { question: "What are the accepted methods of payment?", answer: "We accept credit cards, PayPal, and wire transfers." },
  { question: "Do you ship auction items abroad?", answer: "Yes, we offer international shipping." },
  { question: "Can I customize a handmade rug?", answer: "Yes, customization options are available." },
  { question: "How long does it take to make a handmade rug?", answer: "It depends on size and complexity but generally takes several months." },
  { question: "Why are handmade rugs considered an investment?", answer: "They appreciate in value over time due to craftsmanship and rarity." },
  { question: "How can I contact you for more information or inquiries?", answer: "You can reach us via email or phone." },
  { question: "Why is rug padding important, and do I need it?", answer: "Rug padding extends rug life and prevents slipping." },
  { question: "What can I expect regarding the age of handmade rugs?", answer: "Some handmade rugs are antique, while others are newly crafted." },
  { question: "Can the actual color of the rug differ from the pictures on the website?", answer: "Yes, slight variations may occur due to lighting and screen differences." },
];

const FAQs = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
  }, []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <Box sx={{ padding: "5px", backgroundColor: "#E4DDD0" }}>
        <Typography variant="body1" color="textSecondary" marginLeft="30px">
          <Link to="/" style={{ textDecoration: "none", color: "#5B2E1E" }}>Home</Link> &gt;
          <span style={{ color: "#5B2E1E" }}> About us</span>
        </Typography>
      </Box>

      {/* Title Section */}
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
          Rug Auctions FAQ’s
        </Typography>
        <Divider
          color="#DCD0BA"
          sx={{
            marginLeft: { xs: 2, sm: 8, md: 8 },
            marginRight: { xs: 4, sm: 8, md: 8 },
          }}
        />
      </Box>

      {/* FAQ Container */}
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {/* First Accordion (Static) - No Changes */}
        <Accordion
          expanded
          sx={{
            boxShadow: "none",
            borderRadius: "15px",
            backgroundColor: "#fff",
            padding: "8px 16px",
          }}
        >
          <AccordionSummary
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "48px",
              padding: "8px 0",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", flex: 1 }}>
              How to buy a rug from Rug Auction?
            </Typography>
            <IconButton
              sx={{
                width: "32px",
                height: "32px",
                backgroundColor: "#905A47",
                color: "#fff",
                borderRadius: "50%",
                ml: 2, // Space from text
                "&:hover": { backgroundColor: "#7B4A3A" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "8px 0" }}>
            <Box sx={{ width: { xs: "100%", md: "75%" } }}>
              <Typography variant="body1">
                Before bidding, all buyers must establish credit. You will be asked to furnish identification, present address, contact information, a valid credit card number, credit references, and/or an initial deposit.
              </Typography>
              <Typography variant="body1">
                Buyer agrees to register to bid at least one hour before the start time. Absentee bids must be submitted by email, phone, or in person during the preview period on LiveAuctioneers.com.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Second Set of Accordions (Toggle Feature) */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={() => handleToggle(index)}
            sx={{
              boxShadow: "none",
              border: "none",
              borderTop: "none",
              borderRadius: "15px",
              backgroundColor: "#fff",
              padding: "8px 16px",
              mb: 2,
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "48px",
                padding: "8px 0",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", flex: 1 }}>
                {faq.question}
              </Typography>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the default accordion toggle behavior
                  handleToggle(index);
                }}
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#905A47",
                  color: "#fff",
                  borderRadius: "50%",
                  ml: 2, // Space from text
                  "&:hover": { backgroundColor: "#7B4A3A" },
                }}
              >
                {expandedIndex === index ? <CloseIcon /> : <AddIcon />}
              </IconButton>
            </AccordionSummary>

            {faq.answer && (
              <AccordionDetails sx={{ padding: "8px 0" }}>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default FAQs;
