import { appComponet } from "./actionType"

const initState = {
    cityname : "Goa",
    freecancelation: false,
    Wifi : false,
    kitchen : false,
    Aircondition : false,
    WashingMachine : false,
    Pool : false,
    FreeParking : false
}

export const reduce = (state  = initState , {payload , type}  ) => {
    switch(type){
        case appComponet.HOTEL_CITY : {
            return {
                ...state,
                cityname : payload
            }
        }
        case appComponet.FILTER_WIFI : {
            return {
                ...state,
                Wifi : payload ? false : true,
            }
        }
        case appComponet.FILTER_FREE_CANCELLATION : {
            return{
                ...state,
                freecancelation : payload ? false : true
            }
        }
        case appComponet.FILTER_KITCHEN : {
            return{
                ...state,
                kitchen : payload ? false : true
            }
        }
        case appComponet.FILTER_AIR_CONDITIONING : {
            return{
                ...state,
                kitchen : payload ? false : true
            }
        }
        case appComponet.FILTER_WASHING_MACHINE : {
            return{
                ...state,
                WashingMachine : payload ? false : true
            }
        }
        case appComponet.FILTER_POOL : {
            return{
                ...state,
                Pool : payload ? false : true
            }
        }
        case appComponet.FILTER_FREE_PARKING : {
            return{
                ...state,
                FreeParking : payload ? false : true
            }
        }
        default :  
         return state
     }
}