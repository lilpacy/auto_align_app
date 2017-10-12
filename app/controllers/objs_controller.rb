class ObjsController < ApplicationController
  def index
    @obj = Obj.new
  end

  def create
    @obj = Obj.create(obj_params)
    if @obj.save
      respond_to do |format|
        format.html { redirect_to '/' }
        format.json
      end
    else
      flash.now[:alert] = "タスクの登録に失敗しました。"
      render :index
    end
  end

  private

  def obj_params
    params.require(:obj).permit(:title, :influence, :time, :deadline)
  end
end
