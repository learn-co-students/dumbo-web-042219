require "application_system_test_case"

class TemperatureReadingsTest < ApplicationSystemTestCase
  setup do
    @temperature_reading = temperature_readings(:one)
  end

  test "visiting the index" do
    visit temperature_readings_url
    assert_selector "h1", text: "Temperature Readings"
  end

  test "creating a Temperature reading" do
    visit temperature_readings_url
    click_on "New Temperature Reading"

    fill_in "Temperature", with: @temperature_reading.temperature
    click_on "Create Temperature reading"

    assert_text "Temperature reading was successfully created"
    click_on "Back"
  end

  test "updating a Temperature reading" do
    visit temperature_readings_url
    click_on "Edit", match: :first

    fill_in "Temperature", with: @temperature_reading.temperature
    click_on "Update Temperature reading"

    assert_text "Temperature reading was successfully updated"
    click_on "Back"
  end

  test "destroying a Temperature reading" do
    visit temperature_readings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Temperature reading was successfully destroyed"
  end
end
