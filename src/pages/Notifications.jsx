import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Notifications() {
  
 
      const [titleNumber, setTitleNumber] = useState(0)
      const [windowWidth, setWindowWidth] = useState(
          typeof window !== "undefined" ? window.innerWidth : 1200
      )
  
      const titles = useMemo(
          () => ["Workforce", "Headhunting", "Consulting", "Contractor"],
          []
      )
  
      useEffect(() => {
          const handleResize = () => {
              setWindowWidth(window.innerWidth)
          }
  
          window.addEventListener("resize", handleResize)
          return () => window.removeEventListener("resize", handleResize)
      }, [])
  
      useEffect(() => {
          const timeoutId = setTimeout(() => {
              if (titleNumber === titles.length - 1) {
                  setTitleNumber(0)
              } else {
                  setTitleNumber(titleNumber + 1)
              }
          }, 2000)
          return () => clearTimeout(timeoutId)
      }, [titleNumber, titles])
  
      const getFontSize = () => {
          if (windowWidth < 640) return "2rem"
          if (windowWidth < 768) return "2.5rem"
          return "3rem"
      }
  
      const getAnimatedWidth = () => {
          if (windowWidth < 640) return "200px"
          if (windowWidth < 768) return "240px"
          return "280px"
      }
  
      return (
          <div
              style={{
                  width: "100%",
                  padding: windowWidth < 640 ? "20px" : "0",
              }}
          >
              <div
                  style={{
                      maxWidth: "1280px",
                      margin: "0 auto",
                      paddingTop: "0.5rem",
                      minHeight: "100px",
                      padding: windowWidth < 768 ? "0 20px" : "0",
                  }}
              >
                  <div
                      style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: windowWidth < 768 ? "10px" : "0px",
                      }}
                  >
                      <p
                          style={{
                              fontSize: getFontSize(),
                              letterSpacing: "-0.02em",
                              margin: "0",
                              fontWeight: "600",
                              color: "white",
                              lineHeight: "1.2",
                          }}
                      >
                          Empowering Utilities with
                      </p>
  
                      <div
                          style={{
                              display: "flex",
                              flexDirection: windowWidth < 768 ? "column" : "row",
                              alignItems:
                                  windowWidth < 768 ? "flex-start" : "center",
                              gap: windowWidth < 768 ? "10px" : "0",
                          }}
                      >
                          <p
                              style={{
                                  fontSize: getFontSize(),
                                  letterSpacing: "-0.02em",
                                  margin: "0",
                                  fontWeight: "600",
                                  color: "white",
                                  lineHeight: "1.2",
                              }}
                          >
                              Innovative
                          </p>
  
                          <div
                              style={{
                                  position: "relative",
                                  display: "inline-block",
                                  width: getAnimatedWidth(),
                                  height: windowWidth < 640 ? "45px" : "60px",
                                  marginLeft: windowWidth < 768 ? "0" : "10px",
                                  color: "#EDDCB4",
                              }}
                          >
                              {titles.map((title, index) => (
                                  <motion.span
                                      key={index}
                                      style={{
                                          position: "absolute",
                                          left: "0",
                                          fontWeight: "600",
                                          fontSize: getFontSize(),
                                          letterSpacing: "-0.02em",
                                          lineHeight: "1.2",
                                      }}
                                      initial={{ opacity: 0, y: "-100" }}
                                      animate={
                                          titleNumber === index
                                              ? { y: 0, opacity: 1 }
                                              : {
                                                    y:
                                                        titleNumber > index
                                                            ? -150
                                                            : 150,
                                                    opacity: 0,
                                                }
                                      }
                                      transition={{
                                          ease: "easeOut",
                                          type: "spring",
                                          stiffness: 50,
                                      }}
                                  >
                                      {title}
                                  </motion.span>
                              ))}
                          </div>
                      </div>
  
                      <p
                          style={{
                              fontSize: getFontSize(),
                              letterSpacing: "-0.02em",
                              margin: "0",
                              fontWeight: "600",
                              color: "white",
                              lineHeight: "1.2",
                          }}
                      >
                          solutions.
                      </p>
                  </div>
              </div>
          </div>
      )
  }
  

  


export default Notifications;