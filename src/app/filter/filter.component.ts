import { element } from 'protractor';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import data from './progs.json';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  toppings = new FormControl();
  encapsulation: ViewEncapsulation.None | undefined
   temp:any;
  selectedToppings: any;
  valu: any
  arraycity: any
  savedcitiy: string[] = []
  savedfield: string[] = []
  savedschool: string[] = []
  arrayfield: any
  arrayschool: any

  degree: string = ""
  language: string = ""
  Sort: string = ""

  constructor() { }

  ngOnInit(): void {


    this.valu = data[2].data

    this.arraycity = this.valu.map((item: any) => item.city).filter((value: number, index: number, self: any) => self.indexOf(value) === index)
    this.arrayfield = this.valu.map((item: any) => item.type).filter((value: number, index: number, self: any) => self.indexOf(value) === index)
    this.arrayschool = this.valu.map((item: any) => item.school).filter((value: number, index: number, self: any) => self.indexOf(value) === index)

  }
  getdegr(degree: string) {
    this.degree = degree

  }
  getlang(lang: string) {
    this.language = lang

  }
  getsort(sort: string) {

    this.Sort = sort

  }
  cityfind(city:any){
    this.valu = data[2].data

    this.valu = this.valu.filter((item1:any) =>item1.city==city )

  }
  filiterbycity(city: any,type:string) {
 
   this.valu = this.valu.filter((item1:any) => 

      !!city.find((item2:any) => item1[type] === item2)
   
 );
  }
    
  
  fieldcollect(field: string) {
    this.savedfield.push(field)
  }
  fielddelete(field: string) {

    this.savedfield.splice(this.savedfield.findIndex((city) => city === field))
    console.log(this.savedfield)

  }
  schoolcollect(school: string) {
    this.savedschool.push(school)
  }
  schooldelete(school: string) {

    this.savedschool.splice(this.savedschool.findIndex((city) => city === school))
    console.log(this.savedcitiy)

  }
  citycollect(city: string) {
    this.savedcitiy.push(city)
    console.log(city)
  }
  citydelete(ciy: string) {

    this.savedcitiy.splice(this.savedcitiy.findIndex((city) => city === ciy))
    console.log(this.savedcitiy)

  }
  filterdata() {
    this.valu = data[2].data
   

    this.valu.forEach((item:any)=>{
      item.fee=item.fee.replace(",","")
    })

      if (this.Sort === "low") {

          this.valu.sort((a:any, b:any) => (+(a.fee) > +(b.fee) ) ? 1 : -1)

      }
      if(this.Sort ==="high"){
        this.valu.sort((a:any, b:any) => (+(a.fee) > +(b.fee) ) ? -1 : 1)

        
      }
    
    
    

      if (this.degree != "")
        {this.valu = this.valu.filter((valu: any) => valu.level == this.degree)
        }

        if (this.language != "")
       { this.valu = this.valu.filter((valu: any) => valu.Language == this.language)
       }

        if ( this.savedcitiy.length > 0)
        {

      this.filiterbycity(this.savedcitiy,'city')

        
        }
        if ( this.savedfield.length > 0)
        {

      this.filiterbycity(this.savedfield,'type')

        
        }
        if ( this.savedschool.length > 0)
        {

      this.filiterbycity(this.savedschool,'school')

        
        } 

    
  }
     



    }
  

