import { Injectable } from "@angular/core"

@Injectable()
export class Logger {
  log(message: string){
    console.log(message)
  }
  error(message: string){
    console.error(message)
  }
}