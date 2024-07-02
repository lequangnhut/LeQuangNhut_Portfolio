import {Injectable} from "@angular/core";
import Swal from "sweetalert2";

@Injectable({providedIn: 'root'})
export class AlertService {
  constructor() {
  }

  showToast(icon: 'success' | 'error' | 'warning' | 'info' | 'question', title: string) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
      icon: icon,
      title: title
    });
  }

  showAlert(icon: 'success' | 'error' | 'warning' | 'info' | 'question', title: string, text: string) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
}
