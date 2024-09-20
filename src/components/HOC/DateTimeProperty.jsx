import React from "react";

export function DateTimePretty(Component) {
  return function NewFormatDate (props) {
   
    const formatDate = (date) => {
      
     
      const propDate = new Date(date);
      const currDate = new Date();

      const diffMinutes = (currDate - propDate) / 60000;

      if (diffMinutes < 60) {

        return `${Math.floor(diffMinutes)} мин назад`;

      } else if (diffMinutes >= 60 && diffMinutes < 1440) {

        const diffHours = Math.floor(diffMinutes / 60);
        return `${diffHours} ч. назад`;

      } else {
       
        const diffDays = Math.floor(diffMinutes / 1440);
        return `${diffDays} дн. назад`;
      }

    }

    return <Component {...props} date={formatDate(props.date)}/>
  }
}