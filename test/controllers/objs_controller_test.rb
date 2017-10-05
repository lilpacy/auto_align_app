require 'test_helper'

class ObjsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get objs_index_url
    assert_response :success
  end

end
