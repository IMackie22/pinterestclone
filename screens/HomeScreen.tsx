import MasonryList from "../components/MasonryList";
import { RootTabScreenProps } from "../types";
import pins from "../assets/data/pins";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
	return <MasonryList pins={pins} />;
}
