import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

export class GeneralUtil {
  static toast: ToastrService 

  constructor(public toastr: ToastrService) {}

  // Error Handling 
  static errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error.status >= 400 && error.error.status <= 499) {
        return error.error.message;
      } else if (error.error.status >= 500 && error.error.status <= 599) {

        return "Server not responding, try again later";
      }
      else if (error.error.statusCode == 400 && error.error.status == "FAILED") {
        return error.error.errors[0].message;
      }
    }
    return "Network error";
  }

  static isValidJSON(json: unknown): boolean {
    if (json === null || json === "" || json === undefined) {
      return false;
    }

    const str =  JSON.stringify(json);

    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }
}