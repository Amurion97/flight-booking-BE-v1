import {AppDataSource} from "../data-source";
import {Flight} from "../entity/Flight";

class HouseService {
    private flightRepository = AppDataSource.getRepository(Flight);
    all = async () => {
        let flights = await AppDataSource.createQueryBuilder()
            .select("flight")
            .from(Flight, "flight")
            .innerJoinAndSelect("flight.aircraft", "aircraft")
            .innerJoinAndSelect("aircraft.airline", "airline")
            .innerJoinAndSelect("flight.rows", "rows")
            .getMany()
        return flights
    }

}

export default new HouseService()