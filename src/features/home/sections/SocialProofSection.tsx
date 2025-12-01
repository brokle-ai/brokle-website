'use client'

import { motion } from "@/components/custom/motion"

const customers = [
  { name: "Company 1", logo: "C1" },
  { name: "Company 2", logo: "C2" },
  { name: "Company 3", logo: "C3" },
  { name: "Company 4", logo: "C4" },
  { name: "Company 5", logo: "C5" },
  { name: "Company 6", logo: "C6" },
]

export function SocialProofSection() {
  return (
    <section className="py-12 border-y bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by teams building production AI applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              {/* Placeholder for actual logos - replace with real logos */}
              <div className="w-24 h-8 rounded bg-muted/50 flex items-center justify-center text-muted-foreground text-xs font-medium opacity-60 hover:opacity-100 transition-opacity">
                {customer.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
