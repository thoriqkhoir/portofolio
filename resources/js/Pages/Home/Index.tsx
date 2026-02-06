import PortfolioLayout from "../../Layouts/PortfolioLayout";
import HeroSection from "./Hero-Section";
import AboutSection from "./About-Section";
import PortfolioSection from "./Portfolio-Section";
import ContactSection from "./Contact-Section";
import FloatingLines from "../../Components/bits/FloatingLine";
import GradualBlur from "../../Components/bits/GradualBlur";
import { motion } from "framer-motion";


export default function Portfolio() {
  return (
    <PortfolioLayout>         
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FloatingLines
          linesGradient={['#8b5cf6', '#3b82f6', '#06b6d4']}
          animationSpeed={1}
          interactive={true}
          parallax={true}
          mixBlendMode="normal"
        />
      </div>
      
      

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutSection />
        </motion.div>
        
        
          <PortfolioSection />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactSection />
        </motion.div>
      </div>


      {/* <div className="fixed left-0 right-0 bottom-0 z-20 pointer-events-none">
        <GradualBlur
          target="parent"
          position="bottom"
          height="8rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div> */}

    </PortfolioLayout>
    
  );
}