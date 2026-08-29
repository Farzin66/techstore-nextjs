import SettingsBanner from "@/components/dashboard/settings/SettingsBanner";
import SettingsDescription from "@/components/dashboard/settings/SettingsDescription";
import SettingsPaymentGateways from "@/components/dashboard/settings/SettingsPaymentGateways";
import SettingsPlatformInfo from "@/components/dashboard/settings/SettingsPlatformInfo";
import SettingsSaveButton from "@/components/dashboard/settings/SettingsSaveButton";


const DashboardSettingsPage = () => {
  return (
    <div className="mb-10 space-y-6">
      <SettingsBanner/>
      <SettingsPlatformInfo />
      <SettingsDescription />
      <SettingsPaymentGateways />
      <SettingsSaveButton/>
    </div>
  )
}

export default DashboardSettingsPage;