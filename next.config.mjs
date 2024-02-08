import { config } from 'dotenv';

config();
const nextconfig = {
    env:{
        WEATHER_API:process.env.WEATHER_API,
    },

}
export default nextconfig;