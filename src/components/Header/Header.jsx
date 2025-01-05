import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header_main_container}>
            <div className={styles.heading_logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" />
                <span className={styles.heading_name}>GeekFoods</span>
            </div>

            <div className={styles.header_links}>
                <a style={{color: "#3B82F6"}} href="#">Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>

            <div className={styles.header_button}>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Header;