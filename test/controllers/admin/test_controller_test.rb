require "test_helper"

class Admin::TestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_test_index_url
    assert_response :success
  end
end
