import { useEffect, useState } from "react";
import { team } from "../data"


const useSliderTeam = (idSlider) => {
    const [indexActive, setIndexActive] = useState(1);
    const [cards, setCards] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const cardElements = document.querySelectorAll(`#${idSlider} .card`);
        const profileElements = document.querySelectorAll(`#${idSlider} .profile-contain .profile`);

        setCards(cardElements);
        setProfiles(profileElements);

        setIndexActive(0);
    }, []);


    const handleSlide = ({ activeIndex }) => {
        setIndexActive(activeIndex);

        profiles.forEach((card) => card.classList.remove('showprofile'));
        profiles[activeIndex].classList.add('showprofile');
    };
    

    const selectCard = (index) => {
        setIndexActive(index);

        cards.forEach((card) => card.classList.remove('active'));
        profiles.forEach((card) => card.classList.remove('showprofile'));
        cards[index].classList.toggle('active');
        profiles[index].classList.toggle('showprofile');
    }

    const selectCardAndIncrementIndex = (index) => {
        setIndexActive(index);
        selectCard(index);
    };


     useEffect(() => {
         let intervalId;
         const autoChangeCard = () => {
             const nextIndex = indexActive === team[0].length - 1 ? 0 : indexActive + 1;
             selectCardAndIncrementIndex(nextIndex);
         };
         intervalId = setInterval(() => {
             autoChangeCard();
            }, 999999);
            

            
        const handleMouseEnter = () => {
            clearInterval(intervalId);
        };
        
        const handleMouseLeave = () => {
            if(window.innerWidth < 820){
                return null
            }        
            setTimeout(()=>{
                intervalId = setInterval(autoChangeCard(), 999999);
            }, 999999) 
        };

        cards.forEach((card)=>{
           card.addEventListener("mouseenter", handleMouseEnter);
           card.addEventListener("mouseleave", handleMouseLeave);
        })

        if(window.innerWidth < 820){
            clearInterval(intervalId);
            cards.forEach((card)=>{
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
            })
        } 

        return () =>{ 
            clearInterval(intervalId);
            cards.forEach((card)=>{
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
            })
        };
     }, [indexActive]); 



    return {
        indexActive,
        //methods
        handleSlide,
        selectCard,

    }
}

export default useSliderTeam