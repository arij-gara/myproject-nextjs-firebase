import React from 'react'
import styles from "../styles/login.module.css"
import Image from "next/image"
export default function login() {
  return (
    <div className={styles.container}>
      
     <div className={styles.smallContainer}>
     <div className={styles.leftSide}>
  
      <Image className={styles.image} src="/img1.jpg"   width={300}
      height={450} />
     </div>
     <div className={styles.rightSide}>
       <div className={styles.title}> create your free account 
       </div>
       <div className={styles.form}>
        <label className= {styles.label}for="fname">Full Name</label>
        <input className= {styles.input}  type="text" id="fname" name="firstname" placeholder="Enter your full name here"/>
        <label  className= {styles.label} for="email">Email</label>
        <input  className= {styles.input} type="email" id="email" name="email" placeholder="Enter your email here"/>
        <label className= {styles.label}  for="password">Password</label>
        <input className= {styles.input} type="text" id="password" name="password" placeholder="Enter your password here"/>

        <button className={styles.button}> create account</button>
       </div>
       <div className= {styles.labellogin} >Already have an account ? <span className={styles.span}> log in</span> </div>
       <div className={styles.or}> -- OR --</div>
       <div> 
        <button className={styles.buttonGoogle}>
        <p>signin with  google</p>
        </button>
        </div>
     </div>
     </div>
    </div>
  )
}
