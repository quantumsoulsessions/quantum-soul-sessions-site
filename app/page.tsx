'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function QuantumSoulSessions() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for reaching out! We'll be in touch soon.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Quantum Soul Sessions™</h1>
        <p className="text-lg">
          🔮 Soul medicine for the wild-hearted & awakening. <br />
          🎙️ Delivered as voice note or email — raw, real, and frequency-packed. <br />
          ✨ Starting at $44
        </p>

        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Book a Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="What does your soul long to say right now?"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
              <Button type="submit" className="w-full">
                Send Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-sm mt-6">
          I’m Emily — Oracle Mama, timeline reader, and spiritual sniper with a soft heart & sharp tongue. <br />
          If you’re ready to hear the truth your guides have been screaming, I’m your girl. <br />
          This ain’t love & light fluff. This is sacred, spicy, soul-level clarity that sets you free.
        </div>
      </div>
    </div>
  )
}
