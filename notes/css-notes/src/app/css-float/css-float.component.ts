import { Component } from '@angular/core';

@Component({
  selector: 'app-css-float',
  template: `<ng-container>
    <img class="image" src="../../assets/coding.jfif" />
    <p class="img-paragraph">
      Coding creates a set of instructions for computers to follow. These
      instructions determine what actions a computer can and cannot take. Coding
      allows programmers to build programs, such as websites and apps. Computer
      programmers can also tell computers how to process data in better, faster
      ways. To speak with computers, programmers learn different coding
      languages. Binary code is the primary language of all computers. Binary
      code consists of only two numbers: one and zero. In the binary coding
      language, zero represents off while one represents on. Binary is still
      used with electronics and computer hardware. Programmers can use binary to
      control the flow of electricity and the positive and negative poles of a
      magnet. Binary code allows programmers to create simple instructions and
      procedures for computers.
    </p>
  </ng-container>`,
  styles: [
    `
      .image {
        float: left;
        height: 200px;
        width: 200px;
        border-radius: 200px;
      }

      .img-paragraph {
        position: absolute;
        padding-left: 300px;
        float: right;
        box-sizing: border-box;
      }
    `,
  ],
})
export class CssFloatComponent {}
