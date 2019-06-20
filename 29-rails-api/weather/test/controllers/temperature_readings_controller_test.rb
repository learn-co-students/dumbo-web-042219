require 'test_helper'

class TemperatureReadingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @temperature_reading = temperature_readings(:one)
  end

  test "should get index" do
    get temperature_readings_url
    assert_response :success
  end

  test "should get new" do
    get new_temperature_reading_url
    assert_response :success
  end

  test "should create temperature_reading" do
    assert_difference('TemperatureReading.count') do
      post temperature_readings_url, params: { temperature_reading: { temperature: @temperature_reading.temperature } }
    end

    assert_redirected_to temperature_reading_url(TemperatureReading.last)
  end

  test "should show temperature_reading" do
    get temperature_reading_url(@temperature_reading)
    assert_response :success
  end

  test "should get edit" do
    get edit_temperature_reading_url(@temperature_reading)
    assert_response :success
  end

  test "should update temperature_reading" do
    patch temperature_reading_url(@temperature_reading), params: { temperature_reading: { temperature: @temperature_reading.temperature } }
    assert_redirected_to temperature_reading_url(@temperature_reading)
  end

  test "should destroy temperature_reading" do
    assert_difference('TemperatureReading.count', -1) do
      delete temperature_reading_url(@temperature_reading)
    end

    assert_redirected_to temperature_readings_url
  end
end
