require "test_helper"

class EnqueueControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get enqueue_index_url
    assert_response :success
  end
end
