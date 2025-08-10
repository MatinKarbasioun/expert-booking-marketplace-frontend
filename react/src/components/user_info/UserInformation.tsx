import styles from './UserInformation.module.css'


function UserInformation() {
    return (
        <>
            <div className={styles.userInformationContainer}>
                <div className={styles.userInformation}>
                    <form className={styles.infoForm}>
                        <div className={styles.profileContainer}>
                            <input 
                                id="first-name"
                                type="text"
                                required
                                placeholder="First name"
                            />
                            <input
                                id="last-name"
                                type="text"
                                required
                                placeholder="Last name"
                            />
                        </div>
                        <div className={styles.emailPhoneContainer}>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                            <input
                                id="phone"
                                type="tel"
                                required
                                placeholder="Phone number"
                            />
                        </div>
                        <h2>Address</h2>
                        <div className={styles.addressContainer}>
                            <div className = {styles.stateCityContainer}>
                                <input
                                id="state/province"
                                type="text"
                                required
                                placeholder="State/Province"
                                />
                                <input
                                id="city"
                                type="text"
                                required
                                placeholder="City"
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <input
                            id="first-address"
                            type="text"
                            required
                            placeholder="Address Line No. 1"
                            />
                            <input
                            id="second-address"
                            type="text"
                            placeholder="Address Line No. 2"
                            />
                        </div>
                        <div className={styles.homeContainer}>
                            <input
                            id="Number"
                            type="text"
                            required
                            placeholder="Home/Number"
                            />
                            <input
                            id="zip_code"
                            type="text"
                            required
                            placeholder="Zip code"
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="button" className={styles.backButton} >Back</button>
                            <button type="submit" className={styles.nextButton}>Book a reservation</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}


export default UserInformation;