import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sectors from "./components/Sectors";
import Services from "./components/Services";

import "@n8n/chat/style.css"; // library's default styles
import "./chatOverrides.css"; // your custom styles (must come after)

function App() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n-zkgp.onrender.com/webhook/c8793107-553c-4abc-9c4f-855eeade06d6/chat",
      initialMessages: [
        "Hello there! 👋",
        "My name is alo obiwan. How can I assist you today?",
      ],
      i18n: {
        en: {
          title: "Customer Support Ai Agent",
          subtitle: "",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your queries..",
        },
      },
    });
  }, []);

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Sectors></Sectors>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
