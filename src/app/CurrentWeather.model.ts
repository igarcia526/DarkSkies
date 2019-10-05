import { Currently} from './currently.model';
import { Weather } from './weather.model';

export interface CurrentWeather{
    weather: Weather;
    currently: Currently;
}