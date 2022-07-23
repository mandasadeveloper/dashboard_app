import { DragIconWrapper } from "./styles";
import { DragHandleMinor } from "@shopify/polaris-icons";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
     <DragHandleMinor/>
    </DragIconWrapper>
  );
}
