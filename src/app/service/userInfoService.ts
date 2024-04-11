import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class userInfoServices {
    getUserInfo() {
        // Assume data is coming from backend
        let obj = {
            userName: "Pranay",
            mobileNo: 9637226397,
            email: "pranaybahagt001@gmail.com",
            gender: "Male"
        };
        return obj;
    }
}
