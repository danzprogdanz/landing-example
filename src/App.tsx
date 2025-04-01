import { NavbarComponent } from "./components/navbarComponent";
import { SectionWrapperComponent } from "./components/sectionWrapperComponent";
import { PageLayoutStyled } from "./components/pageLayoutComponent/styled";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <PageLayoutStyled>
        <NavbarComponent />
        <SectionWrapperComponent
          ariaLabel="Hero Section"
        >
          teste1
        </SectionWrapperComponent>
        <SectionWrapperComponent
          ariaLabel="Hero Section"
          backgroundColor="#d42020"
        >
          teste1
        </SectionWrapperComponent>
        <SectionWrapperComponent
          ariaLabel="Hero Section"
          backgroundColor="#321616"
        >
          teste1
        </SectionWrapperComponent>
        <SectionWrapperComponent
          ariaLabel="Hero Section"
          backgroundColor="#33627c"
        >
          teste1
        </SectionWrapperComponent>
      </PageLayoutStyled>
    </ThemeProvider>
  );
}

export default App;
