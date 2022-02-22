require "test_helper"

class InfoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get info_index_url
    assert_response :success
  end
end
