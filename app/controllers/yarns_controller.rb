class YarnsController < ApplicationController
  before_action :set_yarn, only: [:show, :edit, :update, :destroy]
  attr_accessor :skein, :length


  

  # GET /yarns
  # GET /yarns.json
  def index
    @yarns = Yarn.where(user: current_user)
  end

  # GET /yarns/1
  # GET /yarns/1.json
  def show
  end

  # GET /yarns/new
  def new
    @yarn = Yarn.new
    @skein = Skein.new
  end

  # GET /yarns/1/edit
  def edit
  end

  # POST /yarns
  # POST /yarns.json
  

  def create
    #clone yarn params (in private) to attrs var
    attrs = yarn_params().clone
    skein_attrs = skein_params().clone
    #set user_id in attr = current user
    attrs[:user_id] = current_user.id
    @yarn = Yarn.new(attrs)
    respond_to do |format|
      if @yarn.save
        yarn_id = @yarn[:id]
        skein_attrs[:yarn_id] = yarn_id
        @skein = Skein.new(skein_attrs)
        @skein.save
        format.html { redirect_to url_for :controller => 'skeins', :action => 'new', notice: 'Yarn was successfully created.' }
        format.json { render :show, status: :created, location: @yarn }
      else
        format.html { render :new }
        format.json { render json: @yarn.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /yarns/1
  # PATCH/PUT /yarns/1.json
  def update
    respond_to do |format|
      if @yarn.update(yarn_params)
        format.html { redirect_to @yarn, notice: 'Yarn was successfully updated.' }
        format.json { render :show, status: :ok, location: @yarn }
      else
        format.html { render :edit }
        format.json { render json: @yarn.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /yarns/1
  # DELETE /yarns/1.json
  def destroy
    @yarn.destroy
    respond_to do |format|
      format.html { redirect_to yarns_url, notice: 'Yarn was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_yarn
      @yarn = Yarn.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def yarn_params
      params.require(:yarn).permit(:name, :color, :weight, :gauge, :user_id, :num_of_skeins)
    end

    def skein_params
      params.require(:skein).permit(:length, :yarn_id)
    end

   
end
