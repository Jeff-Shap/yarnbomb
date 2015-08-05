require 'test_helper'

class SkeinsControllerTest < ActionController::TestCase
  setup do
    @skein = skeins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:skeins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create skein" do
    assert_difference('Skein.count') do
      post :create, skein: { length: @skein.length }
    end

    assert_redirected_to skein_path(assigns(:skein))
  end

  test "should show skein" do
    get :show, id: @skein
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @skein
    assert_response :success
  end

  test "should update skein" do
    patch :update, id: @skein, skein: { length: @skein.length }
    assert_redirected_to skein_path(assigns(:skein))
  end

  test "should destroy skein" do
    assert_difference('Skein.count', -1) do
      delete :destroy, id: @skein
    end

    assert_redirected_to skeins_path
  end
end
