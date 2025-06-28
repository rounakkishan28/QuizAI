"use client";
import axios from "axios";
import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const result = await axios.post("/api/contact", {
      fullname: fullname,
      email: email,
      message: message,
    });
    toast("Message Sent!");
    setFullname("");
    setEmail("");
    setMessage("");
    setLoading("");
  };

  return (
    <div className="w-full px-10 md:px-32 lg:px-48">
      <div className="flex flex-col items-center justify-center text-gray-100 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-lg py-12 mt-12">
        <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500">
          Contact Us
        </h2>
        <div className="w-full max-w-md mt-7">
          <p>Full Name</p>
          <Input
            value={fullname}
            className="w-full"
            onChange={(e) => setFullname(e?.target.value)}
            placeholder="Enter your fullname"
          />
        </div>
        <div className="w-full max-w-md mt-7">
          <label>Email</label>
          <Input
            value={email}
            className="w-full"
            onChange={(e) => setEmail(e?.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full max-w-md mt-7">
          <label>Message</label>
          <Textarea
            value={message}
            className="w-full"
            onChange={(e) => setMessage(e?.target.value)}
            rows={4}
            placeholder="Type your message"
          />
        </div>
        <Button
          className="w-full mt-5 max-w-md text-black text-base bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-500 hover:to-gray-900 cursor-pointer"
          onClick={onSubmitHandler}
          disabled={
            fullname?.length == 0 ||
            email?.length == 0 ||
            message?.length == 0 ||
            loading
          }
        >
          {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
        </Button>
      </div>
    </div>
  );
}

export default Contact;
