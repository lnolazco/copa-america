import * as React from 'react';
import { Page } from 'react-onsenui';

const Results: React.StatelessComponent = () => (
  <Page>
    <div style={{ textAlign: 'center' }}>
      <iframe
        src="http://widgets.datafactory.la/es/copaamerica/posiciones.html#championship=copaamerica&appIdTrack=16007&show-descentTable=0&team=-1&lang=es&show-positionsTable=1&show-PlayedGames=1&show-Goals=1&show-AgainstGoals=1&show-WinGames=1&show-TieGames=1&show-LostGames=1&show-Diff=1&show-DescentPlayedGames=1&show-DescentPoints=1&show-fixtureTable=1&show-nameDays=1&dateFormat=mmdd&show-goalsTable=1&show-GoalsColumnTeams=1&show-GoalsDetails=1&css-width=300&css-backgroundColor=%23FFFFFF&css-textColor=%23343434&css-desTxtColor=%23BD0926&css-lineColor=%23D1D3D4&css-desEquipoBgColor=%23F1F2F2&css-desEquipoTxtColor=%23bd0a0a&css-navBgColorSel=%230abd0a&css-navColorSel=%23FFFFFF&css-navBgColor=%236F7072&css-navColor=%23FFFFFF&css-titleFontFamily=%22Exo%22%2C%20sans-serif&css-titlePoints=15&css-titleWeight=1&css-titleItalic=0&css-tabsFontFamily=%22Exo%22%2C%20sans-serif&css-tabsPoints=11&css-tabsWeight=0&css-tabsItalic=0&css-mainFontFamily=Arial%2CHelvetica%2Csans-serif&css-mainPoints=11&css-mainWeight=0&css-mainItalic=0&css-height=697&css-tabsColor=%23FFFFFF&css-rowColor=%23BD0926&css-textRowColor=%23FFFFFF&css-borderColor=%23D1D3D4&css-golColor=%23BD0926&css-estadoColor=%23BD0926"
        width="300"
        height="697"
      />
    </div>
  </Page>
);

export default Results;
