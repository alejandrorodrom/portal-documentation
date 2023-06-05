import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavGroupComponent } from './components/nav-group/nav-group.component';
import { RouterLink } from "@angular/router";
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from "ngx-highlightjs";
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab-group/tab/tab.component';
import { ToastComponent } from './components/toast/toast.component';
import { LinkComponent } from './components/link/link.component';
import { InputComponent } from './components/inputs/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { ClickDirective } from './directives/click/click.directive';
import { ButtonComponent } from './components/button/button.component';
import { InputColorComponent } from './components/inputs/input-color/input-color.component';

@NgModule({
  declarations: [
    NavGroupComponent,
    TitleComponent,
    SubtitleComponent,
    ParagraphComponent,
    ExpansionComponent,
    CodeBlockComponent,
    TabGroupComponent,
    TabComponent,
    ToastComponent,
    LinkComponent,
    InputComponent,
    SelectComponent,
    ClickDirective,
    ButtonComponent,
    InputColorComponent
  ],
  exports: [
    NavGroupComponent,
    TitleComponent,
    ParagraphComponent,
    SubtitleComponent,
    ExpansionComponent,
    CodeBlockComponent,
    TabGroupComponent,
    TabComponent,
    ToastComponent,
    LinkComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    InputColorComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class SharedModule {
}
