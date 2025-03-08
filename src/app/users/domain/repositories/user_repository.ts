import { Observable } from "rxjs";
import { User } from "../entities/user";

export abstract class  UserRepository {
     abstract login(email: string, password: string): Observable<User>;
}
