require "test_helper"

class QueueControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get queue_show_url
    assert_response :success
  end

  test "should get index" do
    get queue_index_url
    assert_response :success
  end

  test "should get delete" do
    get queue_delete_url
    assert_response :success
  end

  test "should get update" do
    get queue_update_url
    assert_response :success
  end
end
