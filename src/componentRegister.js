import DefaultGridWrapper from './gridWrapper';
import DefaultGridHeader from './gridHeader';
import DefaultGridContent from './gridTable';
import DefaultGridContentHeader from './gridTableHeader';
import DefaultGridContentBody from './gridTableBody';
import DefaultGridItem from './gridRow';
import DefaultGridProperty from './gridColumn';
import DefaultGridFooter from './gridFooter';

class ComponentRegister{
  constructor (componentOverrides = {}){
    this.gridWrapper = !!componentOverrides.gridWrapper ? componentOverrides.gridWrapper : DefaultGridWrapper;
    this.gridHeader = !!componentOverrides.gridHeader ? componentOverrides.gridHeader : DefaultGridHeader;
    this.gridContent = !!componentOverrides.gridContent ? componentOverrides.gridContent : DefaultGridContent;
    this.gridContentHeader = !!componentOverrides.gridContentHeader ? componentOverrides.gridContentHeader : DefaultGridContentHeader;
    this.gridContentBody = !!componentOverrides.gridContentBody ? componentOverrides.gridContentBody : DefaultGridContentBody;
    this.gridItem = !!componentOverrides.gridItem ? componentOverrides.gridItem : DefaultGridItem;
    this.gridProperty = !!componentOverrides.gridProperty ? componentOverrides.gridProperty : DefaultGridProperty;
    this.gridFooter = !!componentOverrides.gridFooter ? componentOverrides.gridFooter : DefaultGridFooter;
  }
}

module.exports = ComponentRegister;