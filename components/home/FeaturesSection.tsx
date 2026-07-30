import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(
        ({ id, icon, title, description, iconColor, bgColor }) => (
          <FeatureCard
            key={id}
            icon={icon}
            title={title}
            description={description}
            iconColor={iconColor}
            bgColor={bgColor}
          />
        )
      )}
    </div>
  );
}

export default FeaturesSection;