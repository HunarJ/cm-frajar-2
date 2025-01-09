import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme/defaultTheme";
import { colors } from "../../theme";

import LandingPage from "./components/Landing/LandingPage";
import ParagraphDiv from "../../components/ParagraphDiv/ParagraphDiv";
import ReservationPage from "./components/ReservationPage/ReservationPage";
import Footer from "../../components/UI/Footer/Footer";
import Navigation from "../../components/UI/Navigation/Navigation";
import { Layout } from "./styles";
import { Members } from "./components/Members";

const HomePage = () => {



  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation defaultcolor={colors.primary} />
      <Layout>
        <LandingPage />
        <ParagraphDiv
          color={colors.textPrimary}
          margintop={130}
          marginbottom={177}
        >
          Místo, které Vám dovolí poznat na vlastní oči čarovnou krásu Jeseníků a nechat se naplno pohltit jejich kouzelnou mocí. Právě zde můžete načerpat energii odpočinkem či fyzickou aktivitou v jedné z chalup, které jsou Vám plně k dispozici, a to přímo v malebné obci Malá Morávka v podhůří Jeseníků.
        </ParagraphDiv>
        <Members />
        <ReservationPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default HomePage;
