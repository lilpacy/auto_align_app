class ObjsController < ApplicationController
  def index
    @obj = Obj.new
    @objs = align_objs
    @sum_time = 0;
    current_user.objs.each do |obj|
      @sum_time += obj.time
    end
  end

  def create
    @obj = Obj.create(obj_params)
    if @obj.save
      respond_to do |format|
        format.html { redirect_to '/' }
        format.json { render json: align_objs }
      end
    else
      flash.now[:alert] = "タスクの登録に失敗しました。"
      redirect_to '/'
    end
  end

  def update
    if Obj.find(params[:id]).update(obj_params)
      render json: { test: 'test' }
    else
      flash[:alert] = "編集失敗"
      render :index
    end
  end

  def destroy
    Obj.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to '/' }
      format.json { render json: align_objs }
    end
  end

  private

  def obj_params
    params.require(:obj).permit(:title, :influence, :time, :deadline).merge!(user_id: current_user.id)
  end

  def align_objs
    current_user.objs.sort_by {|obj|
      days_left = (obj.deadline != nil) ? (("#{obj.deadline - Time.now }".to_f) / 86400).to_f : 100.0
      urgency = "#{100 - days_left}".to_f
      if 0 < urgency #残り日数が100日を切っているなら
        1.0 / (obj.influence.to_f + urgency.to_f)
      else
        1.0 / obj.influence.to_f
      end
    }
  end

end
